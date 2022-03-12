import {useEffect, useState} from 'react'
import { Map, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import Search from './search'
import { positions } from '@mui/system';
const MapOne = (props: any) => {

  const latitude = props.data.filter((v:any, i:any) => {
    return v.key === 'latitude'
  })
  const longitude = props.data.filter((v:any, i:any) => {
    return v.key === 'longitude'
  })
  
  const [mark, setMark] = useState<[number, number]>([-6.203788914149886, 106.8253877836269])
  const [centers, setCenter] = useState<[number, number]>([-6.203788914149886, 106.8253877836269])
  useEffect(() => {
   const geo = navigator.geolocation
   // console.log(geo.getCurrentPosition)
   if (geo) {
     geo.getCurrentPosition((positions: any) => {
       // console.log(positions)
       setCenter([positions.coords.latitude, positions.coords.longitude])
     })
   } else {
     // console.log('yah')
   }
  }, [])
  
  return (
   <Map center={centers} zoom={18} scrollWheelZoom={false} style={{height: "100%", width: "100%"}} 
    ondragend={(e:any) => {
     // console.log('drag map')
     //  console.log(e.target._lastCenter)
      setCenter([e.target._lastCenter.lat, e.target._lastCenter.lng])
      setMark([e.target._lastCenter.lat, e.target._lastCenter.lng])
      props.onDrag({target: {id: 'latitude', value: e.target._lastCenter.lat}})
      props.onDrag({target: {id: 'longitude', value: e.target._lastCenter.lng}})
    }}
    onclick={(e:any) => {
      // console.log('click')
      // console.log(e.latlng)
      // setCenter([e.latlng.lat, e.latlng.lng])
      setMark([e.latlng.lat, e.latlng.lng])
      props.onDrag({target: {id: 'latitude', value: e.latlng.lat}})
      props.onDrag({target: {id: 'longitude', value: e.latlng.lng}})
    }}
    onmoveend={(e:any) => {
     // console.log('move end')
     //  console.log(e.sourceTarget._lastCenter)
      // setCenter([e.sourceTarget._lastCenter.lat, e.sourceTarget._lastCenter.lng])
      setMark([e.sourceTarget._lastCenter.lat, e.sourceTarget._lastCenter.lng])
      props.onDrag({target: {id: 'latitude', value: e.sourceTarget._lastCenter.lat}})
      props.onDrag({target: {id: 'longitude', value: e.sourceTarget._lastCenter.lng}})
    }}>
    <Search/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker 
      position={mark}
      draggable={true}
      ondragend={(e:any) => {
        console.log('marker')
        console.log(e.target._latlng)
        setMark([e.target._latlng.lat, e.target._latlng.lng])
        props.onDrag({target: {id: 'latitude', value: e.target._latlng.lat}})
        props.onDrag({target: {id: 'longitude', value: e.target._latlng.lng}})
      }}
      >
      </Marker>
    </Map>
  )
};

export default MapOne