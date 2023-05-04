import GoogleMapReact from 'google-map-react';

const Marker = () => <div className='text-lg w-96' style={{fontFamily: 'dirooz'}}>فروشگاه شاپو</div>;

const GoogleMap = () => {
  const defaultProps = {
    center: {
        lat: 35.715298, 
        lng: 51.404343
    },
    zoom: 11
  };

  return (
    <div className='md:w-1/2 w-full h-[350px]'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={35.715500}
          lng={51.404343}
          text="Shapo Office"
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;