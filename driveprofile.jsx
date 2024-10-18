const DriverProfile = () => {
    const [driver, setDriver] = useState({});
    
    useEffect(() => {
        axios.get('/api/driver')
            .then(response => setDriver(response.data))
            .catch(error => console.error('Error fetching driver data', error));
    }, []);

    return (
        <div className="profile">
            <h1>{driver.name}</h1>
            <img src={driver.qrCodeUrl} alt="Driver QR Code" />
            <p>Total Earnings: ${driver.earnings}</p>
            <Promotions />
        </div>
    );
};
export default DriverProfile;
