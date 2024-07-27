// MentalIssue.js

import React from 'react';

const conditions = [
  {
    name: 'Anxiety',
    description: 'Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome. It can be accompanied by physical symptoms such as increased heart rate and sweating.',
    symptoms: ['Increased heart rate', 'Sweating', 'Restlessness', 'Trembling', 'Difficulty concentrating'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., SSRIs)', 'Relaxation techniques', 'Exercise', 'Mindfulness practices']
  },
  {
    name: 'Depression',
    description: 'Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. It can affect daily functioning and overall well-being.',
    symptoms: ['Persistent sadness', 'Loss of interest in activities', 'Fatigue', 'Changes in appetite', 'Sleep disturbances'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Exercise', 'Healthy diet', 'Social support']
  },
  {
    name: 'Social Anxiety',
    description: 'Social anxiety involves an intense fear of social situations where one might be judged or scrutinized by others. It can lead to avoidance of social interactions and significant distress.',
    symptoms: ['Intense fear of social situations', 'Avoidance of social events', 'Physical symptoms like sweating or shaking', 'Excessive worry about being judged', 'Difficulty speaking in public'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., SSRIs)', 'Social skills training', 'Gradual exposure therapy', 'Mindfulness practices']
  },
  {
    name: 'Panic Disorder',
    description: 'Panic disorder is marked by recurrent and unexpected panic attacks, which are sudden periods of intense fear or discomfort. Symptoms may include palpitations, sweating, and trembling.',
    symptoms: ['Sudden intense fear', 'Palpitations', 'Sweating', 'Trembling', 'Shortness of breath'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Breathing exercises', 'Relaxation techniques', 'Gradual exposure therapy']
  },
  {
    name: 'Bipolar Disorder',
    description: 'Bipolar disorder involves extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). These mood swings can affect energy levels, behavior, and daily functioning.',
    symptoms: ['Manic episodes with increased energy', 'Depressive episodes with low mood', 'Rapid mood swings', 'Impulsivity', 'Sleep disturbances'],
    cures: ['Medication (e.g., mood stabilizers)', 'Therapy (e.g., CBT)', 'Regular routine', 'Healthy lifestyle', 'Support groups']
  },
  {
    name: 'Borderline Personality Disorder',
    description: 'Borderline personality disorder is characterized by unstable moods, behavior, and relationships. Individuals may experience intense episodes of anger, depression, and anxiety.',
    symptoms: ['Unstable relationships', 'Intense emotions', 'Fear of abandonment', 'Impulsive behavior', 'Chronic feelings of emptiness'],
    cures: ['Therapy (e.g., DBT)', 'Medication (e.g., mood stabilizers)', 'Healthy coping strategies', 'Support groups', 'Regular therapy sessions']
  },
  {
    name: 'Postpartum Depression',
    description: 'Postpartum depression is a type of depression that occurs after childbirth. It can involve severe mood swings, feelings of inadequacy, and difficulty bonding with the baby.',
    symptoms: ['Severe mood swings', 'Feelings of inadequacy', 'Difficulty bonding with baby', 'Extreme fatigue', 'Changes in appetite'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Support from family and friends', 'Self-care practices', 'Joining support groups for new mothers']
  },
  {
    name: 'Insomnia',
    description: 'Insomnia is a sleep disorder where individuals have trouble falling asleep, staying asleep, or waking up too early. It can lead to daytime fatigue and difficulties in concentration.',
    symptoms: ['Difficulty falling asleep', 'Waking up frequently during the night', 'Waking up too early', 'Daytime fatigue', 'Difficulty concentrating'],
    cures: ['Sleep hygiene practices', 'Cognitive Behavioral Therapy for Insomnia (CBT-I)', 'Medication (e.g., sleep aids)', 'Relaxation techniques', 'Regular sleep schedule']
  },
  {
    name: 'Obsessive-Compulsive Disorder (OCD)',
    description: 'OCD is characterized by persistent, unwanted thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce the anxiety caused by these thoughts.',
    symptoms: ['Unwanted, intrusive thoughts', 'Compulsive behaviors', 'High levels of anxiety', 'Repetitive rituals', 'Interference with daily life'],
    cures: ['Therapy (e.g., ERP)', 'Medication (e.g., SSRIs)', 'Support groups', 'Healthy coping mechanisms', 'Mindfulness techniques']
  },
  {
    name: 'Eating Disorder',
    description: 'Eating disorders involve abnormal or disturbed eating habits. Common types include anorexia nervosa, bulimia nervosa, and binge-eating disorder. They can impact physical health and emotional well-being.',
    symptoms: ['Preoccupation with weight and body image', 'Abnormal eating habits', 'Severe weight changes', 'Emotional distress related to eating', 'Guilt or shame about eating behaviors'],
    cures: ['Therapy (e.g., CBT)', 'Medication (e.g., antidepressants)', 'Nutritional counseling', 'Support groups', 'Regular medical monitoring']
  }
];

const MentalIssue = () => (
  <div className="mental-issue-container max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Mental Health Issues</h1>
    {conditions.map((condition, index) => (
      <section key={index} className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{condition.name}</h2>
        <p className="text-gray-600 mb-4">{condition.description}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Symptoms:</h3>
        <ul className="list-disc list-inside mb-4">
          {condition.symptoms.map((symptom, idx) => (
            <li key={idx} className="text-gray-600">{symptom}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Cures:</h3>
        <ul className="list-disc list-inside">
          {condition.cures.map((cure, idx) => (
            <li key={idx} className="text-gray-600">{cure}</li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);

export default MentalIssue;
