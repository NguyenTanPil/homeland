import bannerImage from '../../assets/img/house-banner.png';
import Search from '../Search';

const Banner = () => {
	return (
		<section className='h-full max-h-640 mb-8 xl:mb-24'>
			<div className='flex flex-col lg:flex-row'>
				<div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:text-left justify-center flex-1 lg:px-0'>
					<h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
						<span className='text-violet-700'>Rent</span> Your Dream House With us.
					</h1>
					<p className='max-w-480 mb-8 text-center lg:text-left'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat, quasi, cupiditate nam qui ipsa maxime
						consequatur officia ratione, error iure. Atque quaerat similique, tenetur vero officiis magnam ipsum odit?
					</p>
				</div>

				<div className='hidden flex-1 lg:flex justify-end items-end'>
					<img
						src={bannerImage}
						alt=''
					/>
				</div>
			</div>
			<Search />
		</section>
	);
};

export default Banner;
