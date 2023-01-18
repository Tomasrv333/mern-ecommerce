import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className='public'>
            <header>
                <h1>Welcome to <span className='nowrap'>E-commerce Project!</span></h1>
            </header>
            <main className='public__main'>
                <p>Quisque quis neque ut elit tincidunt blandit ac ac leo. Integer fermentum mauris libero, a viverra leo vehicula tincidunt. Morbi dignissim dapibus eros eget hendrerit. Nullam condimentum in nisl ullamcorper tincidunt. Etiam purus magna, semper sit amet laoreet sit amet, tristique sit amet urna. Fusce porta, lacus sed hendrerit molestie, nunc tellus aliquet lorem, quis fringilla elit odio sed neque. Nulla pellentesque odio non lectus maximus, at feugiat eros tempus.</p>
                <address className='public__addr'>
                    E-commerce Project<br />
                    Itagui - Ditaires<br />
                    <a href='tel:+573214332191'>321 4332191</a>
                </address>
            </main>
        </section>
    )

    return content
}

export default Public