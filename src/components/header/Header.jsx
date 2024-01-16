import logo from '../../assets/logo.png'
import './Header.css'

const randomDescriptions = ["Discover your dream home or find the perfect buyer with our user-friendly real estate platform.", "Making property buying and selling straightforward and stress-free, your real estate journey starts here", "Experience the future of real estate: seamless, efficient, and tailored to your unique needs."]

const getRandomDescription = (max) => {
    return Math.floor(Math.random() * (max + 1))
}

export default function Header(){
    const description = randomDescriptions[getRandomDescription(2)]
    return (
        <header>
        <img src={logo} alt="logo" />
        <h1>Estate Cyprus</h1>
        <p>
          {description}
        </p>
      </header>
    )
}