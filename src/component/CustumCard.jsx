import React from 'react';
import { useNavigate } from 'react-router-dom';
const CustomCard = () => {
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
  const nav=useNavigate();

  const handleCardClick = (id) => {
    console.log(id, "home");
    nav(`/test-form/1`);
  };
  return (
    <div className="flex justify-center items-center py-12 bg-gray-100 ">
      <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg w-11/12 md:w-full lg:w-6/12 p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">MIND CARE</h1>
          <p className="text-center text-lg mb-2">
             WE AWARE ABOUT YOUR MENTAL HEALTH
          </p>
          <p className="text-center text-lg mb-6">TAKE YOUR FIRST TEST</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCardClick}>
            BUTTON
          </button>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/4 bg-blue-300 rounded-tl-full rounded-bl-full"></div>
      </div>
    </div>
  );
};

export default CustomCard;
