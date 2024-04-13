"use client"
import React, { useContext } from 'react'
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data'
import { useSectionInView } from '../lib/hooks';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/theme-context';

type ExperienceElementProps = {
  item: {
      date: string
      icon: React.ReactNode
      title: string
      location: string
      description: string
  },
};

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  return (
    <section className='scroll-mt-28 mb-28 sm:mb-40'
      ref={ref}
      id='experience'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
      {experiencesData.map((item, index) => (
        <ExperienceElement key={index} item={item}/>
      ))
      }
      </VerticalTimeline>
    </section>
  )
}

const ExperienceElement = ({ item }: ExperienceElementProps,) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const { theme } = useTheme();
  return (
      <div ref={ref} className='vertical-timeline-element'>
          <VerticalTimelineElement
              contentStyle={{
                
                background: theme==='light' ? '#f3f4f6' :  'rgb(255,255,255,0.5)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              visible={inView}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
          </VerticalTimelineElement>
      </div>
  )
}

