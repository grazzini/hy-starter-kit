% LilyBin
global = {
  \hide Staff.BarLine
  s1 s s s s s s s s s 
  % the final bar line is not interrupted
  \undo \hide Staff.BarLine
  \bar "|."
}

\new StaffGroup \relative c <<
  \new Staff { << \global { \clef "treble" s1 s s s s s s s s s } >> }
  \new Staff { << \global { \clef "alto" e'1 c d c a a' g e f e } >> }
>>

\new StaffGroup \relative c <<
  \new Staff { << \global { \clef "treble" s1 s s s s s s s s s } >> }
  \new Staff { << \global { \clef "treble" e'1 c d c a a' g e f e } >> }
>>

