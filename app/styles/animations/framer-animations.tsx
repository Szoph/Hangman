const cardVariants = {
    hidden: {

    },


    rest: {
        rotate: 0,
        transition: {
            duration: 0.5, // Smooth transition back to 0 rotation
            ease: "easeInOut"
        }
    },

    hover: {
        rotate: [0, -5, 5,-5, 5, 0],
   

        transition: {
            duration: 2,
 
            mass: 1,
            damping: 8,
            ease: [0.68, -0.55, 0.27, 1.55],
            times: [0, 0.2, 0.5, 0.8, 1], 
            repeat: Infinity,

        }
    }
}


export { cardVariants, }