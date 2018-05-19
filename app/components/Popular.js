var React = require('react');

class Popular extends React.Component{

  // Property of JS classes
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    // binds this for this method to the react class
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage: lang
      }
    });
  }

  //         }, this)}
  // this second argument is the context to bind

  // this.updateLanguage.bind(null, lang)
  // already bound in the constructor so, null is fine. then it passes the var
  render(){
    var languages = ['All','Javascript','Ruby','Java','CSS','Python'];

    return(
      <ul className='languages'>
        <p>{`Selected Language: ${this.state.selectedLanguage}`}</p>
        { languages.map(function(lang){
          return(
            <li
              style={lang === this.state.selectedLanguage ? {color: '#dd00ee'}:null}
              key={lang}
              onClick={this.updateLanguage.bind(null, lang)}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    );
  }
}

  // !! Arrow function - the good this is that the this inside it, its the same as outside
  // { languages.map(function(lang){. become { languages.map((lang) => {
  // render(){
  //   var languages = ['All','Javascript','Ruby','Java','CSS','Python'];

  //   return(
  //     <ul className='languages'>
  //       <p>{`Selected Language: ${this.state.selectedLanguage}`}</p>
  //       { languages.map((lang) => {
  //         return(
  //           <li
  //             style={lang === this.state.selectedLanguage ? {color: '#dd00ee'}:null}
  //             key={lang}
  //             onClick={this.updateLanguage.bind(null, lang)}>
  //             {lang}
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   );

// Export to be used somewhere else
module.exports = Popular;
