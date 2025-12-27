import { motion } from 'motion/react';
import { Flower2, Sparkles, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-fuchsia-50 to-violet-100 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating flowers */}
        <motion.div
          className="absolute top-20 left-10 text-purple-300 opacity-40"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Flower2 size={64} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-fuchsia-300 opacity-40"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Flower2 size={80} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-20 text-violet-300 opacity-30"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Flower2 size={72} />
        </motion.div>
        <motion.div
          className="absolute top-1/4 right-32 text-purple-200 opacity-35"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -12, 0]
          }}
          transition={{ 
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Flower2 size={68} />
        </motion.div>

        {/* Sparkles */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-fuchsia-400 opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-purple-400 opacity-30"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles size={56} />
        </motion.div>
        <motion.div
          className="absolute top-1/4 left-1/3 text-violet-300 opacity-25"
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        >
          <Sparkles size={40} />
        </motion.div>

        {/* Hearts */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 text-fuchsia-300 opacity-25"
          animate={{ 
            scale: [1, 1.2, 1],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-16 text-purple-300 opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Heart size={32} fill="currentColor" />
        </motion.div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-10 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-fuchsia-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main content */}
      <div className="text-center relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
          }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Flower2 size={56} className="text-fuchsia-500" strokeWidth={1.5} />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <Flower2 size={72} className="text-purple-600" strokeWidth={1.5} />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
            >
              <Flower2 size={56} className="text-violet-500" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            delay: 0.5
          }}
          className="relative"
        >
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent mb-6 tracking-tight leading-none">
            Hi My Flower
          </h1>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 1.5,
              delay: 1.2,
              ease: "easeOut"
            }}
            className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full mb-8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 1.2
          }}
          className="flex justify-center gap-3 mb-8"
        >
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              animate={{ 
                y: [0, -12, 0],
                opacity: [0.4, 1, 0.4],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15
              }}
            >
              <Sparkles size={24} className="text-fuchsia-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 1.5
          }}
          className="mt-8 text-purple-700 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
        >
          Alexandara, you bloom with grace and beauty, illuminating every moment with your presence
        </motion.p>

        {/* Decorative hearts at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 2
          }}
          className="flex justify-center gap-4 mt-12"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
            >
              <Heart 
                size={28} 
                className={`${
                  index === 1 ? 'text-fuchsia-500' : 'text-purple-500'
                }`}
                fill="currentColor"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}