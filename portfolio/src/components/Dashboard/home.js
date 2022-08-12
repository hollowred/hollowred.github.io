
const Home = () => {
    return (
        <div className="dashboard">

            <form>
                <p><input type="text" placehplder="Name" /></p>
                <p><textarea placehplder="Description" /></p>
                <p><input type="text" placehplder="Url" /></p>
                <p><input type="file" placehplder="Image" /></p>
            </form>
        </div>
    )
}

export default Home;