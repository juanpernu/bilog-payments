import { useRouter } from 'next/router';

const Card = ({ children }) => {
  const router = useRouter();

  const handleOnClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className="product-card">
      {children}
    </div>
  )
};

export default Card;
