import zIndex from '@mui/material/styles/zIndex';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapControl, withLeaflet } from 'react-leaflet';
import { on } from 'stream';
class Search extends MapControl {
  createLeafletElement() {
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'bar',
      showMarker: true,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'search',
      zIndex: 1000,
      resultFormat: ({ result } : any) => result.label,
    });
  }
}

export default withLeaflet(Search);