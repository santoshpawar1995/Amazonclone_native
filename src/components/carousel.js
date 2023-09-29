import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useRef, useState } from 'react'

import CarouselSlider, { Pagination } from 'react-native-snap-carousel';
import { CarouselData } from '../data/CarouselData';
const sliderWidth=Dimensions.get('screen').width;

const Carousel = () => {
    const [activeSlide, setActiveSlide]=useState(0);
    const carouselRef=useRef();

    renderItem = ({item, index}) => {
            
        return (
              <View style={styles.slide}>
              <Image source={item.image} style={styles.imgstle}/>
              
            </View>
        );
    }
  return (
    <View style={styles.carouselpgntn}>
   
       <CarouselSlider
              ref={carouselRef}
              data={CarouselData}
              renderItem={renderItem }
              sliderWidth={sliderWidth}
              itemWidth={500}
             onSnapToItem={index => setActiveSlide(index)}
            />
                <Pagination
              dotsLength={CarouselData.length}
              activeDotIndex={activeSlide}
              containerStyle={{
                position:'absolute',
                bottom: 0,
                left: '15%'

              }}
           
              dotStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                }}
              inactiveDotStyle={{
                width: 15,
                  height: 15,
                  borderRadius: 10,
                   }}
                inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            dotColor="red"
            inactiveDotColor="white"
           
           
            />
    </View>
  )
}
const styles=StyleSheet.create({
    carouselpgntn:{
     position:'relative',
    },
    slide:{

    },
    imgstle:{
        height:250,
        width:'100%'
    }
  
    
})

export default Carousel;