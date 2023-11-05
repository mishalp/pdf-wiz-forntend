import ReactLoading from 'react-loading';

const Loader = ({ className }) => (
    <div className="mx-auto">
        <ReactLoading className={className} type="spin" color='#59656f' height={'auto'} width={30} />
    </div>
);

export default Loader;