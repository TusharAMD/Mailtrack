import { useAuth0 } from "@auth0/auth0-react";
import { motion } from 'framer-motion'
function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const text1 = "Tracking Your Emails Is Now "
  const text2 = "Super Easy."

  const effect = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: [-1, -1.9, -2.7, 1],
      scaleY: [1, 1.3, 0.8, 1]
    }
  }

  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15
      }
    }
  }

  const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1.2, 1],
      color: 'red'
    }
  }
  return (
    <>
      <div className="Home">
        <div className="homecontent">
          <motion.div className="lettr" style={{ display: 'flex' }} variants={list} initial="hidden" animate="visible">
            {text1.split("").map((Letter, id) => (
              <motion.span variants={effect} key={id}>
                <motion.h1 variants={spanVariants} whileHover="hover">{Letter}</motion.h1>
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="lettr" style={{ display: 'flex' }} variants={list} initial="hidden" animate="visible">
            {text2.split("").map((Letter, id) => (
              <motion.span variants={effect} key={id}>
                <motion.h1 className="Super " variants={spanVariants} whileHover="hover">{Letter}</motion.h1>
              </motion.span>
            ))}
          </motion.div>
          <motion.p initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 2, type: 'spring', stiffness: 80 } }}>Mail Tracker helps you to check who opened your emails, how many times with zero cost and with great accuracy.
            {isAuthenticated && <div id="gotodash"><a href="/dashboard">Go to Dashboard</a><i className="material-icons">
              play_arrow</i></div>}
          </motion.p>
        </div>
        <div className="homeimages">
          <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 1, type: 'spring' } }}>
            <img src="https://i.ibb.co/BnbXcDq/g1850.png"></img>
          </motion.div>
          <div className="circle">
          </div>
        </div>
      </div>
      <p className="bottomline">Made with &#128150;</p>
    </>
  );
}

export default Home;
