import React, { useState, useRef } from 'react'
import SearchBar from '../../common/SearchBar'
import ProfileImage from '../../img/profileImg.jpg'

import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'


const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (e) => {
        // Check if there is a file and the file is in index 0
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]

            //Set the image to the useState
            setImage({
                image: URL.createObjectURL(img),
            })
        }
    }

    return (
        <div className='flex gap-4 sticky top-0 bg-white z-[999] p-4 rounded-md'>
            <img src={ProfileImage} alt="profile" className='rounded-full h-[3rem] object-cover' />
            <div className='w-full'>
                <SearchBar placeholder="What's happening?" />
                <div className='flex justify-around items-center pt-4'>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'
                        // When this div click, it will click also the input button below
                        onClick={() => imageRef.current.click()}>
                        <UilScenery />
                        <p>Photo</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'>
                        <UilPlayCircle />
                        <p>Video</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'>
                        <UilLocationPoint />
                        <p>Location</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'>
                        <UilSchedule />
                        <p>Schedule</p>
                    </div>
                    <button className='px-5 py-2 flex items-center button'>
                        Share
                    </button>
                    <div className='hidden' >
                        <input 
                        type="file" 
                        name='myImage' 
                        ref={imageRef} 
                        onChange={onImageChange} />
                    </div>
                </div>

                {image && (
                    <div className='relative'>
                        <UilTimes onClick={() => setImage(null)} className='absolute right-4 top-2 cursor-pointer' />
                        <img src={image.image} alt="" className='w-full max-h-[20rem] object-cover rounded-lg'  />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare