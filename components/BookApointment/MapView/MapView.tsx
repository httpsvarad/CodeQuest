// components/BookAppointment/MapView/MapView.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { ViewToggle } from '../ViewToggle/ViewToggle';
import { Lab } from '../Filters';

const MapBox = dynamic(() => import('@/components/BookApointment/MapView/MapBox'), {
  ssr: false,
  loading: () => <p className="text-center mt-4">📍 Loading map...</p>,
});


interface MapViewProps {
  labs: Lab[]; // already typed
  onViewModeChange: (mode: 'list' | 'map') => void;
}

export const MapView: React.FC<MapViewProps> = ({ labs, onViewModeChange }) => (
  <>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-gray-700">Showing Labs on Map</h2>
      <ViewToggle viewMode="map" onViewModeChange={onViewModeChange} />
    </div>
    <main>
      <section className="text-center mt-10">
        <div className="relative mt-6 mx-auto max-w-5xl w-[1024] h-[600] my-20">
          <MapBox labs={labs} />
        </div>
      </section>
    </main>
  </>
);


