import ReactLoading from 'react-loading';
 
const Loader = () => (
    <div className="relative mx-auto">
        <ReactLoading type="spin" color='#59656f' height={0} width={30} />
    </div>
);
 
export default Loader;