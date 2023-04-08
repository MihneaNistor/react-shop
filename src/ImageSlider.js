import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';
import "./styles/ImageSlider.css"

function ImageSlider() {
    const [index, setIndex] = useState(0);

    const imgArr = [
        {url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title: "poza1",
         id: 0
        },
        {url:"https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title: "poza2",
         id: 1
        },
        {url: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title: "poza3",
         id: 2
        },
        {url: "https://images.pexels.com/photos/5418935/pexels-photo-5418935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title: "poza4",
         id: 3
        },
        {url: "https://images.pexels.com/photos/9594686/pexels-photo-9594686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title: "poza5",
         id: 4
        }
    ];
       
    function prevFunc() {
        setIndex(index - 1);
        index === 0 && setIndex(imgArr.length-1);
      }
    
    function nextFunc() {
        setIndex(index + 1);
        index === imgArr.length-1 && setIndex(0);
      }
    
    function goToImg(indexId) {
        setIndex(indexId);
      }
    
  return (
    <div className='image-slider-flex'>
        <div className='image-slider'>
            <div className='changeImg'>
            <button onClick={prevFunc}>
                <ArrowBackIosIcon/>
            </button>
            <img src = {imgArr[index].url} alt = {imgArr[index].title}/>
            <button onClick={nextFunc}>
                <ArrowForwardIosIcon/>
            </button>  
            </div>
            <div className='circles'>
            {imgArr.map((img, indexId) => ( 
                index !== indexId ?
                    <CircleOutlinedIcon onClick={() => goToImg(indexId)} />
                    : <CircleIcon onClick={() => goToImg(indexId)}/>
                ))}

            </div>
        </div>
    </div>
  )
}

export default ImageSlider