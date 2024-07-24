const Header = () => {
    const headerStyle = {
        border: '2px solid black',         // Border style
        paddingTop: '20px',                // Padding inside the box
        paddingBottom: '20px',
        borderRadius: '5px',              // Rounded corners (optional)
        textAlign: 'center',              // Center the text (optional)
        backgroundColor: '#f0f0g9',       // Light grey fill color
    };

    return (
        <h1 style={headerStyle}>InSync Fraud Detection</h1>
    );
};

export default Header;
