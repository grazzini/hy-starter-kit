% LilyBin
\layout { 
  indent = #0
  ragged-last = ##t
}

ficta = { \once \set suggestAccidentals = ##t }

global = {
  \override Staff.NoteHead.style = #'baroque
  \hide Staff.BarLine
  s1 s | s s | s s | s s |
  s s  | s s | s s | s s | s s |
  s s  | s s | s s | s s | s s | 
  s s  | s s | s s | s s | s s | 
  s s  | s s | s s | s s | s s | 
  s s | s s | s s | s s | s s |
  s s | s s | s s | s s | s s | s s | 
  % the final bar line is not interrupted
  \undo \hide Staff.BarLine
  \bar "|."
}

\new StaffGroup \relative c' <<
  \new Staff { << \global {
    \time 2/1 \clef "treble" 
	c1 d2. e4 | f2 f1 e2 | d2 g c, f1 | e2 c4 d e f |
	g a b a8 b c2 f,1 | e2 g a | d, g1 f2 | e a1 g2 | c a g2. f4 |
	e2 a2. g8 f g2 | c, c'2. b4 a1| g2 f e | f d1 c2 | b d1 c2 | 
	d2 g2. f4 e2 | a2. g4 f2 e | d g1 f2 | e2 g f e1 | d2 r e |
	f2 g1 f2 | \ficta bes1 a | a g2 c1 | b2 c a1 | g2 e4 f g e |
	f4 e g2. f4 f1 | e2 f2. g4 | a b c2. b4 a2 | g c1 b2 | c a g c2. |
	a4 c2 b c1 | b2 r e, | g a2. g4 g2( | g) f2 e a2. | g4 g1 \ficta fis2# | g\breve
	
  } >> }
  \new Staff { << \global {
    \time 2/1 \clef "treble_8" 
	r1 g, | a2. b4 c2 c1 | b2 a a | c2. b4 a1 |
	g a | c1. c2 | b2. c4 d1 | c2 a b c | a4 b c d e2 b |
	c2 a bes1 | a2. g4 f2 f | \ficta bes1 a2. g4 | f2 g e2. f4 | g1 e2 a |
	b2 b c2. b4 | a2 d1 c2 | b c a1 | g2 e a2. g4 | f1 e2 c' |
	d2 c4 b a1 | g2 d'1 c2 | f d e f | d1 a2 d | b b c1 |
	a2 g a bes | g1 r2 d'1 | c2 f1 | e2 c d2. d4 | a b c d e2 c |
	f2 e1 d4 c | d2 e a, c1 | a2 b c | d1 c | b2 c a1 | g\breve |
	
  } >> }
>>
