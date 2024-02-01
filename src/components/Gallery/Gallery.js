import React, { useState } from 'react'
import ThumbnailItem from '../ThumbnailItem/ThumbnailItem'

import './styles.css'


const imagesList = [
    {
      id: 0,
      imageUrl:
        './images/waterfall.png',
      thumbnailUrl:
        './images/waterfall.png',
      imageAltText: 'nature waterfall',
      thumbnailAltText: 'nature waterfall thumbnail',
    },
    {
      id: 1,
      imageUrl: './images/bird.png',
      thumbnailUrl:
        './images/bird.png',
      imageAltText: 'nature bird',
      thumbnailAltText: 'nature bird thumbnail',
    },
    {
      id: 2,
      imageUrl:
        './images/forest.png',
      thumbnailUrl:
        '/images/forest.png',
      imageAltText: 'nature forest',
      thumbnailAltText: 'nature forest thumbnail',
    },
    {
      id: 3,
      imageUrl:
        '/images/naturelight.png',
      thumbnailUrl:
        '/images/naturelight.png',
      imageAltText: 'nature light',
      thumbnailAltText: 'nature light thumbnail',
    },
    {
      id: 4,
      imageUrl: '/images/river.png',
      thumbnailUrl:
        '/images/river.png',
      imageAltText: 'nature blueriver',
      thumbnailAltText: 'nature blueriver thumbnail',
    },
    {
      id: 5,
      imageUrl: '/images/sunset.png',
      thumbnailUrl:
        '/images/sunset.png',
      imageAltText: 'nature sunsetlocation',
      thumbnailAltText: 'nature sunsetlocation thumbnail',
    },
    {
      id: 6,
      imageUrl:
        '/images/trees.png',
      thumbnailUrl:
        '/images/trees.png',
      imageAltText: 'nature trees',
      thumbnailAltText: 'nature trees thumbnail',
    },
    {
      id: 7,
      imageUrl: '/images/icemount.png',
      thumbnailUrl:
        '/images/icemount.png',
      imageAltText: 'nature mountin',
      thumbnailAltText: 'nature mountin thumbnail',
    },
  ]

let initalactiveId = imagesList[0].id

const Gallery = () => {
  
  let [activeThumbnailId, setActiveThumnailId] = useState(initalactiveId)
  

  // eslint-disable-next-line
  const activeThumbnail = id => {
    setActiveThumnailId(id)  
  }

  
  
  return (
    <>
        <div className='app-container'>
            <div className='gallery-container'>
                <img src= {imagesList[activeThumbnailId].imageUrl} alt = {imagesList[activeThumbnailId].imageAltText} className='selected-image'/>
                <h1 className='heading'>Nature Photography</h1>
                <p className='description'>Nature Photography by Chandrasekhar Jeelam</p>
                <ul className='thumbnails-list'>
                  {imagesList.map(eachImage => (
                    <ThumbnailItem 
                    key = {eachImage.id}
                    imageDetails = {eachImage}
                    isActive = {activeThumbnailId === eachImage.id}
                    activeThumbnail = {activeThumbnail}
                    />
                  )) 
                  }
                </ul>
            </div>
        </div>
    </>
  )
}

export default Gallery
