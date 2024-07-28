import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vdo from '../assets/InShot_20240723_234557451.mp4';
import CustomCard from '../component/CustumCard';
import Faq from '../component/Faq';

const conditions = [
  'anxiety',
  'depression',
  'social-anxiety',
  'panic-disorder',
  'bipolar-disorder',
  'borderline-personality-disorder',
  'postpartum',
  'insuiavity',
  'ocd',
  'eating-disorder'
];
const dataArray = [
  [
      { id:1 ,
        "test": "ANXIETY TEST",
        "questions": [
          "Feeling nervous, anxious, or on edge",
          "Not being able to stop or control worrying",
          "Worrying too much about different things",
          "Trouble relaxing",
          "Being so restless that it is hard to sit still",
          "Becoming easily annoyed or irritable",
          "Feeling afraid as if something awful might happen",
          "Difficulty concentrating on tasks",
          "Experiencing muscle tension or aches",
          "Having trouble falling or staying asleep, or sleeping too much"
        ],
        "options": [
          "Not at all",
          "Several days",
          "More than half the days",
          "Nearly every day"
        ],
        "scoring": {
          "0-4": "Minimal anxiety",
          "5-9": "Mild anxiety",
          "10-14": "Moderate anxiety",
          "15-21": "Severe anxiety"
        },
        "interpretation": {
          "below 40%": "Good",
          "40-70": "You can improve your mental health. Check simple tips to improve.",
          "70 above": "Consult a doctor. Check resources."
        }
      },
      { id:2 ,
        "test": "DEPRESSION TEST",
        "questions": [
          "Little interest or pleasure in doing things?",
          "Feeling down, depressed, or hopeless?",
          "Trouble falling or staying asleep, or sleeping too much?",
          "Feeling tired or having little energy?",
          "Poor appetite or overeating?",
          "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
          "Trouble concentrating on things, such as reading the newspaper or watching television?",
          "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
          "Thoughts that you would be better off dead or of hurting yourself in some way?",
          "Feeling overwhelmed, anxious, or stressed to the point it affects your daily functioning?"
        ],
        "options": [
          "Not at all",
          "Several days",
          "More than half the days",
          "Nearly every day"
        ],
        "scoring": {
          "0-4": "Minimal or no depression",
          "5-9": "Mild depression",
          "10-14": "Moderate depression",
          "15-19": "Moderately severe depression",
          "20-30": "Severe depression"
        },
        "interpretation": {
          "below 40%": "Good",
          "40-70": "You can improve your mental health. Check simple tips to improve.",
          "70 above": "Consult a doctor. Check resources."
        }
      },
      { id:3,
        "test": "SOCIAL ANXIETY",
        "questions": [
          "How often do you fear that others will judge you negatively in social situations?",
          "How often do you avoid social situations because you feel uncomfortable or anxious?",
          "How often do you experience physical symptoms (e.g., sweating, trembling, blushing) when in social situations?",
          "How often do you worry about embarrassing yourself in front of others?",
          "How often do you find it difficult to speak in front of a group of people?",
          "How often do you isolate yourself or stay at home to avoid social interactions?",
          "How often do you feel intense fear or dread before attending social events?",
          "How often do you evaluate yourself negatively after social interactions?",
          "How often do you feel uncomfortable in social gatherings or parties?",
          "How often does social anxiety affect your daily life and activities?"
        ],
        "options": [
          "Never",
          "Occasionally",
          "Frequently",
          "Always"
        ],
        "scoring": {
          "0-10": "Minimal social anxiety",
          "11-20": "Mild social anxiety",
          "21-30": "Moderate social anxiety",
          "31-40": "Severe social anxiety"
        },
        "interpretation": {
          "below 40%": "Good",
          "40-70": "You can improve your mental health. Check simple tips to improve.",
          "70 above": "Consult a doctor. Check resources."
        }
      },
      { id:4,
        "test": "PANIC DISORDER",
        "questions": [
          "How often do you experience sudden, intense feelings of fear or panic that seem to come out of nowhere?",
          "How often do you feel short of breath or experience difficulty breathing during these episodes?",
          "How often do you experience a racing heart or palpitations during these episodes?",
          "How often do you feel a sense of impending doom or that something terrible is about to happen during these episodes?",
          "How often do you feel dizzy, lightheaded, or as if you might faint during these episodes?",
          "How often do you avoid places or situations because you fear having a panic attack?",
          "How often do you feel detached from your surroundings or as if you are not real during these episodes?",
          "How often do you experience trembling or shaking during these episodes?",
          "How often do you experience sweating or chills during these episodes?",
          "How often do you worry about when the next panic attack will occur?"
        ],
        "options": [
          "Never",
          "Rarely",
          "Sometimes",
          "Often"
        ],
        "scoring": {
          "0-10": "Minimal or no symptoms of panic disorder",
          "11-20": "Mild symptoms of panic disorder",
          "21-30": "Moderate symptoms of panic disorder",
          "31-40": "Severe symptoms of panic disorder"
        },
        "interpretation": {
          "below 40%": "Good",
          "40-70": "You can improve your mental health. Check simple tips to improve.",
          "70 above": "Consult a doctor. Check resources."
        }
      },
      { id:5,
        "test": "BIPOLAR DISORDER",
        "questions": [
          "How often do you experience sudden, intense mood swings that are hard to control?",
          "How often do you feel overly happy or euphoric without any apparent reason?",
          "How often do you have periods of unusually high energy, even with little or no sleep?",
          "How often do you find yourself feeling unusually irritable or agitated?",
          "How often do you experience significant changes in your sleep patterns (sleeping too much or too little)?",
          "How often do you engage in risky or impulsive behaviors (e.g., excessive spending, reckless driving)?",
          "How often do you have trouble concentrating or making decisions?",
          "How often do you feel extremely sad or hopeless without any clear cause?",
          "How often do you lose interest in activities you used to enjoy?",
          "How often do you experience physical symptoms (e.g., headaches, stomachaches) without a clear medical reason?"
        ],
        "options": [
          "Never",
          "Sometimes",
          "Often",
          "Always"
        ],
        "scoring": {
          "0-10": "Low likelihood of Bipolar Disorder",
          "11-20": "Moderate likelihood of Bipolar Disorder",
          "21-30": "High likelihood of Bipolar Disorder"
        },
        "interpretation": {
          "below 40%": "Good",
          "40-70": "You can improve your mental health. Check simple tips to improve.",
          "70 above": "Consult a doctor. Check resources."
        }
      },
      { id:6,
        "test": "POSTPARTUM DEPRESSION",
        "questions": [
          "How often have you felt overwhelmed or unable to cope with your daily responsibilities?",
          "How often have you experienced feelings of sadness or emptiness?",
          "How often have you had trouble sleeping, even when your baby is asleep?",
          "How often have you felt anxious or excessively worried about your baby or other things?",
          "How often have you felt a lack of interest or pleasure in activities you used to enjoy?",
          "How often have you felt irritable or angry for little or no reason?",
          "How often have you experienced a significant change in your appetite (eating much more or much less than usual)?",
          "How often have you felt disconnected from your baby or found it difficult to bond with them?",
          "How often have you had difficulty concentrating or making decisions?",
          "How often have you had thoughts of harming yourself or your baby?"
        ],
        "options": [
          "Never/Rarely",
          "Sometimes",
          "Often",
          "Always"
        ],
        "scoring": {
          "0-7": "Low risk of postpartum depression",
          "8-15": "Moderate risk of postpartum depression",
          "16-30": "High risk of postpartum depression"
        },
        "interpretation": {
          "below 40%": "Good",
          "40-70": "You can improve your mental health. Check simple tips to improve.",
          "70 above": "Consult a doctor. Check resources."
        }
      },
      { id:7,
        "test": "EATING DISORDER",
        "questions": [
          "How often do you feel preoccupied with your weight or body shape?",
          "How often do you avoid eating with others due to anxiety about your eating habits?",
          "How often do you find yourself eating large quantities of food in a short period of time?",
          "How often do you feel out of control during eating episodes?",
          "How often do you engage in behaviors to compensate for overeating (e.g., vomiting, excessive exercise)?",
          "How often do you experience guilt or shame about your eating habits?",
          "How often do you skip meals or restrict your food intake intentionally?",
          "How often do you use food as a way to cope with emotional stress or anxiety?",
          "How often do you feel that your eating habits are affecting your physical health?",
          "How often do you experience fluctuations in weight that seem related to your eating habits?"
        ],
        "options": [
          "Never",
          "Rarely",
          "Sometimes",
          "Often"
        ],
        "scoring": {
          "0-10": "Low risk of eating disorder",
          "11-20": "Moderate risk of eating disorder",
          "21-30": "High risk of eating disorder"
        },
        "interpretation": {
          "below 40%": "Good",
          "40-70": "You can improve your mental health. Check simple tips to improve.",
          "70 above": "Consult a doctor. Check resources."
        }
      }
    ]
    
];
const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCardClick = (id) => {
    console.log(id, "home");
    navigate(`/test-form/${id}`);
  };

  return (
    <div className="relative max-w-full bg-white font-sans">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={vdo}
          autoPlay
          muted
          loop
          className="object-cover w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-6 md:p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          Discover mental health resources and support. Empower yourself with the tools and knowledge to improve your well-being.
        </p>
        <button
          onClick={handlePlayPause}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          {isPlaying ? 'Pause Video' : 'Play Video'}
        </button>
      </div>

      <div className="relative z-10 px-4 py-8 md:px-8 md:py-12 bg-white text-black max-w-4xl mx-auto rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-600 text-center">Welcome to Mind Care</h2>
        <p className="text-base md:text-lg leading-relaxed ">
          In today's fast-paced world, taking care of our mental well-being is more important than ever. Life can get overwhelming at times, and that's why it's crucial to prioritize our mental health just like we do with our physical health. Mental health is increasingly disturbed due to irregular schedules and stress, affecting many people today. Take some time from your busy schedule to improve your mental health by taking our mental health assessment test and checking your well-being.
        </p>
      </div>

      <div className="relative z-10 px-4 py-8 md:px-8 md:py-12 bg-white text-black max-w-6xl mx-auto rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Mental Health Conditions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataArray.flat().map((test) => (
            
            <div
              key={test.id}
              className="bg-white border border-blue-200 hover:bg-green-100 text-black rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleCardClick(test.id)}
            >
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 capitalize">{test.test.replace('-', ' ')}</h3>
                <p className="text-sm">
                  Learn more about {test.test.replace('-', ' ')} and find resources and support to help manage it.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CustomCard />
      <div className="">
      <Faq/>
      </div>
    </div>
  );
};

export default Home;