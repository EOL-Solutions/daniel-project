import styles from './styles/Project-2.module.css'
import mastercraft from './assets/project-2/logo-mastercraft.svg'
import check from './assets/project-2/icon-check.svg'

export default function Project () {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <div className={styles.logo} />
        <div className={styles['menu-bar']}>
          <input type='checkbox' name='menu' id='menu' className={styles['menu-icon']} />
          <label for='menu' className={styles['mobile-label']}>
            <div className={styles.hamburguer} />
            <div className={styles['close-menu']} />
          </label>
          <nav className={styles.navbar}>
            <a href='#' className={styles['nav-link']}>About</a>
            <a href='#' className={styles['nav-link']}>Discover</a>
            <a href='#' className={styles['nav-link']}>Get Started</a>
            <a href='#attribution' className={styles['nav-link']}>Attribution</a>
          </nav>
        </div>
      </div>

      <div className={`${styles['modal-card']} ${styles.card}`}>
        <img src={mastercraft} alt='logo-Mastercraft' />
        <h3>Mastercraft Bamboo Monitor Riser</h3>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className={styles['modal-card-buttons']}>
          <button className={`${styles['solid-button']} ${styles['project-button']}`} id='project-button'>Back this project</button>
          <button className={styles.bookmark} />
        </div>
      </div>

      <div className={`${styles['stats-section']} ${styles.card}`}>
        <div className={styles['all-stats']}>
          <div className={styles.stat}>
            <h3>$89,914</h3>
            <p>of $100,000 backed</p>
          </div>
          <hr />
          <div className={styles.stat}>
            <h3>5,007</h3>
            <p>total backers</p>
          </div>
          <hr />
          <div className={styles.stat}>
            <h3>56</h3>
            <p>days left</p>
          </div>
        </div>
        <div className={styles.loadbar}><span /></div>
      </div>

      <div className={`${styles.about} ${styles.card}`}>
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          <br /><br />
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <div className={styles.stand}>
          <h3>Bamboo Stand</h3>
          <p className={styles.subtitle}>Pledge $25 or more</p>
          <p className={styles.text}>
            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
            you’ll be added to a special Backer member list.
          </p>
          <p className={styles.amount}><span>101</span> left</p>
          <button className={`${styles['solid-button']} ${styles['stand-button']}`}>Select Reward</button>
        </div>

        <div className={styles.stand}>
          <h3>Black Edition Stand</h3>
          <p className={styles.subtitle}>Pledge $75 or more</p>
          <p className={styles.text}>
            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
            member list. Shipping is included.
          </p>
          <p className={styles.amount}><span>64</span> left</p>
          <button className={`${styles['solid-button']} ${styles['stand-button']}`}>Select Reward</button>
        </div>

        <div className={`${styles.stand} ${styles['out-stock']}`}>
          <h3>Mahogany Special Edition</h3>
          <p className={styles.subtitle}>Pledge $200 or more</p>
          <p className={styles.text}>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
            to our Backer member list. Shipping is included.
          </p>
          <p className={styles.amount}><span>0 </span> left</p>
          <button className={`${styles['solid-button']} ${styles['stand-button']}`} disabled>Out of Stock</button>
        </div>
      </div>

      <div className={styles.attribution} id='attribution'>
        Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='https://github.com/ddaniel27'>ddaniel27</a>.
      </div>

      <div className={`${styles.modal} ${styles.card}`}>
        <div className={styles['little-header']}>
          <h3>Back this project</h3>
          <div className={styles['close-modal']} id='close-modal' />
        </div>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <div className={`${styles.stand} ${styles['modal-stand-card']}`}>
          <input type='radio' id='stand-1' name='stand' className={styles['radio-button']} />
          <label for='stand-1'>
            <h3>Pledge with no reward</h3>
            <p className={styles.subtitle}>Pledge $0 or less</p>
          </label>
          <p className={styles.text}>
            Choose to support us without a reward if you simply believe in our project. As a backer,
            you will be signed up to receive product updates via email.
          </p>
          <hr />
          <div className={styles['selected-stand']}>
            <button className={`${styles['solid-button']} ${styles['modal-card-button']}`}>Continue</button>
          </div>
        </div>

        <div className={`${styles.stand} ${styles['modal-stand-card']}`}>
          <input type='radio' id='stand-2' name='stand' className={styles['radio-button']} />
          <label for='stand-2'>
            <h3>Bamboo Stand</h3>
            <p className={styles.subtitle}>Pledge $25 or more</p>
          </label>
          <p className={styles.text}>
            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
            you’ll be added to a special Backer member list.
          </p>
          <p className={styles.amount}><span>101</span> left</p>
          <hr />
          <p className={styles['selected-stand-text']}>Enter your pledge</p>
          <div className={styles['selected-stand']}>
            <input type='number' value='25' />
            <button className={`${styles['solid-button']} ${styles['modal-card-button']}`}>Continue</button>
          </div>
        </div>

        <div className={`${styles.stand} ${styles['modal-stand-card']}`}>
          <input type='radio' id='stand-3' name='stand' className={styles['radio-button']} />
          <label for='stand-3'>
            <h3>Black Edition Stand</h3>
            <p className={styles.subtitle}>Pledge $75 or more</p>
          </label>
          <p className={styles.text}>
            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
            member list. Shipping is included.
          </p>
          <p className={styles.amount}><span>64</span> left</p>
          <hr />
          <p className={styles['selected-stand-text']}>Enter your pledge</p>
          <div className={styles['selected-stand']}>
            <input type='number' value='75' />
            <button className={`${styles['solid-button']} ${styles['modal-card-button']}`}>Continue</button>
          </div>
        </div>

        <div className={`${styles.stand} ${styles['modal-stand-card']} ${styles['out-stock']}`}>
          <input type='radio' id='stand-4' name='stand' className={styles['radio-button']} disabled />
          <label for='stand-4'>
            <h3>Mahogany Special Edition</h3>
            <p className={styles.subtitle}>Pledge $200 or more</p>
          </label>
          <p className={styles.text}>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
            to our Backer member list. Shipping is included.
          </p>
          <p className={styles.amount}><span>0</span>left</p>
          <hr />
          <p className={styles['selected-stand-text']}>Enter your pledge</p>
          <div className={styles['selected-stand']}>
            <input type='number' value='200' />
            <button className={`${styles['solid-button']} ${styles['modal-card-button']}`}>Continue</button>
          </div>
        </div>
      </div>

      <div className={`${styles.success} ${styles.card}`}>
        <img src={check} alt='Check' />
        <h2>Thanks for your support!</h2>
        <p className={styles.text}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
          an email once our campaign is completed.
        </p>
        <button className={styles['solid-button']} id='finish-button'>Got it!</button>
      </div>
    </div>
  )
}
