import { Star, Scissors } from 'lucide-react'
import mockupsImg from '../../assets/images/mockups.png'
import GradientIconCard from './GradientIconCard'


function MockupSection() {
    return (
        <div className='my-container pb-5 md:pb-10 pt-10 lg:pt-0 relative'>
            <div className="sm:w-[80%] mx-auto">
                    <img src={mockupsImg} alt="" className='w-full' />
            </div>
            <div className="absolute top-0 lg:-top-10 left-0 flex justify-between w-full">
                <GradientIconCard icon={Star} />
                <GradientIconCard icon={Scissors} />
            </div>
        </div>
    )
}

export default MockupSection