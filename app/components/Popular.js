var React = require('react');
var PropTypes = require ('prop-types');

// Component here instead of new file since its only used here
class SelectLanguage extends React.Component{
    render(){
      var languages = ['All','Javascript','Ruby','Java','CSS','Python'];
      return(
      <ul className='languages'>
        { languages.map(function(lang){
          return(
            <li
              style={lang === this.props.selectedLanguage ? {color: '#dd00ee'}:null}
              key={lang}
              onClick={this.props.onSelect.bind(null, lang)}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    );
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

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

  render(){
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    );
  }
}

module.exports = Popular;
