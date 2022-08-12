import { useRef } from 'react';
import { auth, storage } from '../../firebase'
import { ref } from 'firebase/storage'

const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const iamge = form.current[3]?.files[0];

        const storageRef = ref(storage, `portfolio/${image.name}`)
    }

    return (
        <div className="dashboard">

            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placehplder="Name" /></p>
                <p><textarea placehplder="Description" /></p>
                <p><input type="text" placehplder="Url" /></p>
                <p><input type="file" placehplder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;