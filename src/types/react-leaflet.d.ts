declare module 'react-leaflet' {
  import { FC } from 'react'
  import { LatLngExpression, MapOptions, TileLayerOptions, MarkerOptions, PopupOptions, PolylineOptions, LatLngBoundsExpression, PathOptions } from 'leaflet'

  export interface MapContainerProps extends MapOptions {
    center?: LatLngExpression
    zoom?: number
    bounds?: LatLngBoundsExpression
    children?: React.ReactNode
    className?: string
  }

  export interface TileLayerProps extends TileLayerOptions {
    url: string
    attribution?: string
  }

  export interface MarkerProps extends MarkerOptions {
    position: LatLngExpression
    children?: React.ReactNode
  }

  export interface PopupProps extends PopupOptions {
    children?: React.ReactNode
  }

  export interface PolylineProps {
    positions: LatLngExpression[] | LatLngExpression[][]
    pathOptions?: PathOptions
    children?: React.ReactNode
  }

  export const MapContainer: FC<MapContainerProps>
  export const TileLayer: FC<TileLayerProps>
  export const Marker: FC<MarkerProps>
  export const Popup: FC<PopupProps>
  export const Polyline: FC<PolylineProps>
} 