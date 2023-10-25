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
                <img src="https://img.etimg.com/thumb/msid-101782619,width-300,height-225,imgsize-11368,,resizemode-75/man-wanted-in-12-criminal-cases-nabbed-in-delhi.jpg" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>Of the MLAs analysed, the ADR said 1,136 or about 28 per cent have declared serious criminal cases against themselves.</h3>
                <h6>Jul 15, 2023, 04:41 PM IST</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
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
                <p className='news-desc'>
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
                <p className='news-desc'>
                Maharashtra Chief Minister Eknath Shinde on Friday defended the 'one nation, one election' proposal, stating that it would save public money.The Election Commission of India had to spend Rs 10,000 crore on the 2019 general elections.
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://via.placeholder.com/400x200" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>This is the title</h3>
                <h6>Elections Coming</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://via.placeholder.com/400x200" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>This is the title</h3>
                <h6>Elections Coming</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://via.placeholder.com/400x200" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>This is the title</h3>
                <h6>Elections Coming</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://via.placeholder.com/400x200" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>This is the title</h3>
                <h6>Elections Coming</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://via.placeholder.com/400x200" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>This is the title</h3>
                <h6>Elections Coming</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://via.placeholder.com/400x200" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>This is the title</h3>
                <h6>Elections Coming</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <img src="https://via.placeholder.com/400x200" alt="Image" id='image'/>
              </div>

              <div card-content>
                <h3>This is the title</h3>
                <h6>Elections Coming</h6>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deleniti error eum porro veritatis laudantium illum mollitia inventore? Quo, ipsa!
                </p>
              </div>
            </div>

            
        </div>
      </main>
    </div>
  

   
  )
}
