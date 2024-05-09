import '@styles/App.scss'
import {Banner, Header, Start, Footer} from '@components/index'
import BannerProps from '@/types/BannerProps'


import img1 from '@images/img-1.png'
import img2 from '@images/img-2.png'
import img3 from '@images/img-3.png'
import img4 from '@images/img-4.png'
import img5 from '@images/img-5.png'

const banners: BannerProps[] = [
    {
        title: 'Style & Beauty',
        subtitle: 'New fashion brand',
        image: img1
    },
    {
        title: 'Living Room Girls',
        subtitle: 'Interior Design - Red Room',
        image: img2
    },
    {
        title: 'The shape of water flowers',
        subtitle: 'Book Cover',
        image: img3
    },
    {
        title: 'Capturing the sunlight',
        subtitle: 'Fashion Photoshoot',
        image: img4
    },
    {
        title: 'Looking on the other side',
        subtitle: 'Portrait photography',
        image: img5
    }
]


const App = () =>{
    
    return(
        <div className="wrapper">
            <Header/>
            <main className='main'>
                {
                    banners.map(({title, subtitle, image}, index) => <Banner key={index} title={title} subtitle={subtitle} image={image}/>)
                }
                <Start/>
            </main>
            <Footer/>
        </div>
    )
}

export default App