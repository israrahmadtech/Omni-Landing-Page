import { Star, Scissors } from 'lucide-react'
import mockupsImg from '../../assets/images/mockups.png'
import GradientIconCard from './GradientIconCard'


function MockupSection() {
    return (
        <div className='my-container pb-5 md:pb-10 pt-20 lg:pt-10 relative'>
            <img src={mockupsImg} alt="" />
            <div className="absolute top-0 left-0 flex justify-between w-full">
                <GradientIconCard icon={Star} />
                <GradientIconCard icon={Scissors} />
            </div>
        </div>
    )
}

export default MockupSection