% LilyBin
% Passacaglia
\layout {
  ragged-right = ##t
}

\new StaffGroup \relative c <<
  \new Staff { \clef "treble" s1 s s s }
  \new Staff { \clef "bass" a'1 g f e }
>>

% LilyBin
% Ciaccona
\layout {
  ragged-right = ##t
}

\new StaffGroup \relative c <<
  \time 3/2
  \new Staff { \clef "treble" s2 s s | s s s }
  \new Staff { \clef "bass" g'2. g4 d2 | e4 b2 c4 d2 }
>>


% LilyBin
% Lament
\layout {
  ragged-right = ##t
}

\new StaffGroup \relative c <<
  \new Staff { \clef "treble" s1 s s s }
  \new Staff { \clef "bass" a'1 g f e }
>>

\new StaffGroup \relative c <<
  \new Staff { \clef "treble" s1 s s s }
  \new Staff { \clef "bass" a'1 g f e }
>>

\new StaffGroup \relative c <<
  \new Staff { \clef "treble" s1 s s s }
  \new Staff { \clef "bass" a'1 gis2 g2 fis2 f2 e1 }
>>


% LilyBin
% Folia
\layout {
  ragged-right = ##t
}

\new StaffGroup \relative c, <<
    \new Staff { \clef "treble"
		\repeat volta 2 {  s1 s s s s s }
		\alternative { { s1 | s } { s1 | s } }
	}
    \new Staff { \clef "bass"
		\repeat volta 2 { d'1 a d c f c }
		\alternative { { d1 | a } { d2 a | d1 } }
	}
>>

