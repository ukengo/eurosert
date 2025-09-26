import Section from '@/layouts/Section'
import './AboutCEMark.scss'
import CeMarkBlock from '@/components/CeMarkBlock'
import {
  ABOUT_CE_MARK,
  ABOUT_CE_MARK_CONTENT,
  ABOUT_CE_MARK_DESCRIPTION,
  ABOUT_CE_MARK_NOTE,
  ABOUT_CE_MARK_NOTE_TEXT,
  ABOUT_CE_MARK_TITLE,
} from '@/constants/others'

export default () => {
  return (
    <Section
      className="about-ce-mark"
      /* title='CE marking' */
    >
      <h1 className="about-ce-mark__title">{ABOUT_CE_MARK_TITLE}</h1>
      <div className="about-ce-mark__descroption">
        {ABOUT_CE_MARK_DESCRIPTION}
      </div>
      <div className="about-ce-mark__blocks">
        {ABOUT_CE_MARK.map(({ mark__title, mark__descroption }, index) => (
          <CeMarkBlock
            key={index}
            title={mark__title}
            description={mark__descroption}
          />
        ))}
      </div>
      <div className="about-ce-mark__content">
        {ABOUT_CE_MARK_CONTENT.map(({ paragraph, list }, index) => (
          <>
            <p key={index}>{paragraph}</p>
            {list && (
              <ul>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        ))}
      </div>
      <h3 className="about-ce-mark__note-title">{ABOUT_CE_MARK_NOTE}</h3>
      {ABOUT_CE_MARK_NOTE_TEXT.map((text, index) => (
        <p key={index} className="about-ce-mark__note-text">
          {text}
        </p>
      ))}
    </Section>
  )
}
