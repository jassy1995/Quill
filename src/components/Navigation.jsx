import { Link } from '@tanstack/router';

export default function NavigationHeader() {
    return (
        <div className='flex justify-center items-center space-x-6'>
            <Link to="/" activeProps={{ style: { fontWeight: 'bold', textDecoration: 'underline', textUnderlineOffset: '12px' } }}>For you</Link>
            <span className='font-bold sm-hidden'>|</span>
            <Link to="/follow" activeProps={{ style: { fontWeight: 'bold', textDecoration: 'underline', textUnderlineOffset: '12px' } }}>Follow</Link>
            <span className='font-bold sm-hidden'>|</span>
            <Link to="/post" activeProps={{ style: { fontWeight: 'bold', textDecoration: 'underline', textUnderlineOffset: '12px' } }}>Post</Link>
        </div>
    )
}

