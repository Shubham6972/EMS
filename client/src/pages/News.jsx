import React from 'react'
import {Link} from 'react-router-dom';

import '../Css/News.css';



export default function News() {

  const handleClick1 = ()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/parties-collect-rs-2077-cr-in-donations-spend-rs-288-cr-in-gujarat-hp-assembly-elections-adr/articleshow/104492902.cms")
  }
  const handleClick2=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/election-commission-to-hear-pleas-by-ncp-factions-over-party-name-symbol-row/articleshow/104201601.cms")
  }
  const handleClick3=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/if-national-consensus-not-achieved-on-simultaneous-polls-it-shouldnt-be-thrust-on-people-ex-cec-quraishi/articleshow/104365431.cm")
  }
  const handleClick4=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/elections/lok-sabha/bypolls-to-four-vacant-lok-sabha-seats-unlikely-sources/articleshow/103585334.cms")
  }
  const handleClick5=()=>{
      window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/maharashtra-cm-shinde-defends-one-nation-one-election-says-it-will-save-public-money/articleshow/103287127.cms")
  }
  const handleClick6=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/maharashtra-speaker-rahul-narwekar-to-seek-ec-advice-on-sena-mlas-disqualification/articleshow/100286581.cms")
  }
  const handleClick7=()=>{
    window.location.href("https://economictimes.indiatimes.com/news/how-to/how-election-commission-grants-national-state-status-to-political-parties/articleshow/99530433.cms")
  }
  const handleClick8=()=>{
    windpw.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/indias-govt-contemplates-one-nation-one-election-can-modis-ambitious-reform-be-a-reality/articleshow/103285338.cms")
  }
  const handleClick9=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/ls-polls-preparations-ec-begins-first-level-check-of-evms-paper-trail-machines-across-india/articleshow/100884342.cms")
  }
  const handleClick10=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/economy/finance/poll-freebies-to-hurt-long-term-growth-say-experts/articleshow/100236680.cms")
  }
  const handleClick11=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/election-commission-declares-253-registered-unrecognised-political-parties-as-inactive/articleshow/94181805.cms")
  }
  const handleClick12=()=>{
    window.location.replace("https://economictimes.indiatimes.com/news/politics-and-nation/decide-as-representation-plea-on-simultaneous-centre-state-elections-hc-to-authorities/articleshow/97639264.cms")
  }

  
  return (
    <div>
      <main>
        <div className='cards-container contain flex'>
        <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-104492910,width-300,height-225,imgsize-47754,,resizemode-75/rupee-rises-6-paise-to-83-24-against-us-dollar-in-early-trade.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Parties collect Rs 2,077 cr in donations, spent Rs 288 cr in Gujarat & HP assembly elections: ADR</h3>
                <h6>Last Updated: Oct 17, 2023, 02:28 PM IST</h6>
                <a href=""></a><p className='news-desc' onClick={handleClick1}>
                An analysis by the Association for Democratic Reforms (ADR) has revealed that 11 political parties collected a total of Rs 2078 crore and spent Rs 288 crore during the Himachal Pradesh and Gujarat assembly elections. 
                </p>
                {/* <button type ='button'classname='primary-btn' onClick={handleClick1}>Read more</button> */}
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-104201783,width-300,height-225,imgsize-29554,,resizemode-75/sharad-pawar-and-ajit-pawar.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Election Commission to hear pleas by NCP factions over party name, symbol row</h3>
                <h6>Oct 06, 2023, 09:11 AM IST</h6>
                <p className='news-desc' onClick={handleClick2}>
                The Election Commission of India will listen to the arguments of both factions of the Nationalist Congress Party (NCP) regarding the party name and symbol. The dispute is between Sharad Pawar's faction and Ajit Pawar's faction
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-104365678,width-300,height-225,imgsize-11156,,resizemode-75/capture.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>If national consensus not achieved on simultaneous polls, it shouldn't be thrust on people: Ex-CEC Quraishi</h3>
                <h6>Jul 15, 2023, 04:41 PM IST</h6>
                <p className='news-desc' onClick={handleClick3}>
                Former Chief Election Commissioner S Y Quraishi has stated that if there is no national consensus on conducting simultaneous elections, it should not be forced upon the people.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-103585385,width-300,height-225,imgsize-66260,,resizemode-75/vote-agencies.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Bypolls to four vacant Lok Sabha seats unlikely: Sources</h3>
                <h6>Sep 11, 2023, 09:45 PM IST</h6>
                <p className='news-desc' onClick={handleClick4}>
                The Election Commission and the Legislative Department in the Union Law Ministry are learnt to be in touch with each other on the issue, they said. According to statutory provisions, the Legislative Department has to concur with the EC on delaying or not holding an election or a by-election.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-103287338,width-300,height-225,imgsize-950291,,resizemode-75/state-govt-to-organise-pro-govinda-event.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Maharashtra CM Shinde defends 'one nation, one election', says it will save public moneyt</h3>
                <h6> Sep 03, 2023, 12:55 AM IST</h6>
                <p className='news-desc' onClick={handleClick5}>
                Maharashtra Chief Minister Eknath Shinde on Friday defended the 'one nation, one election' proposal, stating that it would save public money.The Election Commission of India had to spend Rs 10,000 crore on the 2019 general elections.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-100286612,width-300,height-225,imgsize-736316,,resizemode-75/speaker-narwekar-to-seek-ec-advice-on-sena-mlas-disqualification.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Maharashtra Speaker Rahul Narwekar to seek EC advice on Sena MLAs' disqualification</h3>
                <h6>Last Updated: May 17, 2023, 12:43 AM IST</h6>
                <p className='news-desc' onClick={handleClick6}>
                Once we get the details from the EC...whether the elections (intra party elections) have been held or not, whether the party has been running as per the norms of the Election Commission or as per the party's constitution.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-99530734,width-300,height-225,imgsize-225018,,resizemode-75/election-commission_reuters.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>How Election Commission grants national, state status to political parties</h3>
                <h6>Last Updated: Apr 16, 2023, 11:41 AM IST</h6>
                <p className='news-desc' onClick={handleClick7}>
                The Election Commission (EC) revised the list of national and state political parties earlier this week.The conditions are laid out in the Election Symbols (Reservation and Allotment) Order, 1968.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-103285222,width-650,height-488,imgsize-26838,,resizemode-75/election-getty.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>India's govt contemplates 'One Nation, One Election': Can Modi's ambitious reform be a reality?</h3>
                <h6>Last Updated: Sep 04, 2023, 08:33 AM IST</h6>
                <p className='news-desc' onClick={handleClick8}>
                The Indian government, led by PM Modi, is considering the implementation of a "One Nation, One Election" system, which would involve simultaneous state and general elections. The government has reportedly formed a committee to explore the possibility of this system.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-100884369,width-300,height-225,imgsize-46390,,resizemode-75/counting-of-jalandhar-lok-sabha-bypoll-begins-.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>LS polls preparations: EC begins 'first level check' of EVMs, paper trail machines across India</h3>
                <h6>Last Updated: Jun 10, 2023, 12:13 AM IST</h6>
                <p className='news-desc' onClick={handleClick9}>
                the Election Commission has initiated "first level checks" of EVMs and papertrail machines across the country in a phased manner, sources said. "Mock polls" are part of the first level check,they said.It is a pan-India exercise.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-100236721,width-300,height-225,imgsize-28120,,resizemode-75/cash_rep.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Poll freebies to hurt long-term growth, say experts</h3>
                <h6>Last Updated: May 15, 2023, 08:23 PM IST</h6>
                <p className='news-desc' onClick={handleClick10}>
                Experts have warned that populist promises, such as cash and travel subsidies, promised by political parties in the lead up to elections in India, could harm long-term growth prospects. C Rangarajan, former RBI governor, suggested enforcing strict fiscal-deficit limits to limit freebies
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-94181790,width-300,height-225,imgsize-13966,,resizemode-75/election-commission.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Election Commission declares 253 registered unrecognised political parties as 'inactive'</h3>
                <h6>Last Updated: Sep 13, 2022, 07:43 PM IST</h6>
                <p className='news-desc' onClick={handleClick11}>
                The ECI said that as per statutory requirements under Section 29A of the Representation of the People Act, every political party has to communicate any change in its name, head office, office-bearers, address, PAN etc. to the Commission without delay.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://img.etimg.com/thumb/msid-97639318,width-300,height-225,imgsize-34810,,resizemode-75/delhi-high-court-vacates-lower-courts-ex-parte-order-against-oman-chemical.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Decide as representation plea on simultaneous Centre, State elections: HC to authorities</h3>
                <h6>Last Updated: Feb 06, 2023, 12:25 PM IST</h6>
                <p className='news-desc' onClick={handleClick12}>
                The petitioner advocate Ashwini Kumar Upadhyay sought directions to the Centre and the EC to consider conducting simultaneous Lok Sabha and assembly elections to save money, reduce burden on security forces and public administration.
                </p>
              </div>
            </div>

            
        </div>
      </main>
    </div>
  

   
  )
}
