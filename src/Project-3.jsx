import styles from './styles/Project-3.module.css'
import facebook from './assets/project-3/icon-facebook.svg'
import instagram from './assets/project-3/icon-instagram.svg'
import twitter from './assets/project-3/icon-twitter.svg'
import pinterest from './assets/project-3/icon-pinterest.svg'
import emily from './assets/project-3/image-emily.jpg'
import thomas from './assets/project-3/image-thomas.jpg'
import jennie from './assets/project-3/image-jennie.jpg'

export default function Project () {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <div className={`${styles.header} ${styles['fade-in']}`}>
          <div className={styles.logo} />
          <div className={styles.menu}>
            <input type='checkbox' name='menu' id='menu' className={styles['menu-icon']} hidden />
            <label for='menu' className={styles['mobile-label']}>
              <div className={styles.hamburguer} />
            </label>
            <nav className={styles.navbar}>
              <a href='#' className={styles['nav-link']}>About</a>
              <a href='#' className={styles['nav-link']}>Services</a>
              <a href='#' className={styles['nav-link']}>Projects</a>
              <a href='#' className={styles['nav-link']}>Contact</a>
              <a href='#attribution' className={styles['nav-link']}>Attribution</a>
            </nav>
          </div>
        </div>
        <h1 className={styles['fade-in']}>WE ARE CREATIVES</h1>
      </div>

      <div className={styles['container-parent']}>
        <div className={`${styles.container} ${styles.egg}`} />

        <div className={`${styles.container} ${styles.yellow}`}>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <a href='#'>Learn more</a>
        </div>

        <div className={`${styles.container} ${styles.cup}`} />

        <div className={`${styles.container} ${styles.pink}`}>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>
          <a href='#'>Learn more</a>
        </div>

        <div className={`${styles.container} ${styles.cherry}`}>
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
          </p>
        </div>

        <div className={`${styles.container} ${styles.orange}`}>
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
          </p>
        </div>
      </div>

      <div className={styles.testimonials}>
        <h2>Client testimonials</h2>
        <div className={styles['testimonials-container']}>
          <div className={styles['personal-testimony']}>
            <img src={emily} alt='Emily porfile pic' className={styles['porfile-pic']} />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </p>
            <h3>Emily R.</h3>
            <h4>Marketing Director</h4>
          </div>

          <div className={styles['personal-testimony']}>
            <img src={thomas} alt='Thomas porfile pic' className={styles['porfile-pic']} />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h3>Thomas S.</h3>
            <h4>Chief Operating Officer</h4>
          </div>

          <div className={styles['personal-testimony']}>
            <img src={jennie} alt='Jennie porfile pic' className={styles['porfile-pic']} />
            <p>
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>
            <h3>Jennie F.</h3>
            <h4>Business Owner</h4>
          </div>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles['photo-sample']} />
        <div className={styles['photo-sample']} />
        <div className={styles['photo-sample']} />
        <div className={styles['photo-sample']} />
      </div>
      <footer>
        <div className={styles.logo} />
        <div className={styles.items}>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Projects</a>
        </div>
        <div className={styles['social-media']}>
          <img src={facebook} alt='Facebook Icon' />
          <img src={instagram} alt='Instagram Icon' />
          <img src={twitter} alt='Twitter Icon' />
          <img src={pinterest} alt='Pinterest Icon' />
        </div>

        <div className={styles.attribution}>
          Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
          Coded by <a href='https://github.com/ddaniel27' id='attribution'>ddaniel27</a>.
        </div>
      </footer>
    </div>
  )
}
