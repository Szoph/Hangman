const WelcomeContainerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0
    },

    visible: {
        x: 0,
        opacity: 1,
        transition: {type: 'spring', mass:1, stiffness: 90, ease: "linear"},
    }
}

const iconVariants = {
    hidden: {
        x: '-100vw'
    },

    visible: {
        x: '0vw',
        transition: {type: 'spring', mass:1, stiffness: 70, ease: "linear"},
    }
}

const titleVariants = {
    hidden: {
        y: '-100vh', 
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2, 
            ease: "easeOut",
            delay: 0.5 
        }
    }
}

const buttonVariants = {


    hover: {
        scale: 1.3,
        transition: {duration: 0.5}
    }
}

export {WelcomeContainerVariants, iconVariants, titleVariants, buttonVariants}

