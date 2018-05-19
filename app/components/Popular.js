var React = require('react');
var PropTypes = require ('prop-types');
var api = require('../utils/api');

function SelectLanguage (props){
  var languages = ['All','Javascript','Ruby','Java','CSS','Python'];
  return(
    <ul className='languages'>
      { languages.map(function(lang){
        return(
          <li
            style={lang === props.selectedLanguage ? {color: '#dd00ee'}:null}
            key={lang}
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>
        )
      })}
    </ul>
  );
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
      selectedLanguage: 'All',
      repos: null
    };

    // binds this for this method to the react class
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    // AJAX
    api.fetchPopularRepos(lang)
      .then(function(repos){
        this.setState(function(){
          return{ repos: repos }
        });
      }.bind(this))
      // bind above make the this to be the main class
  }

  render(){
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {JSON.stringify(this.state.repos,null,2)}
      </div>
    );
  }
}

module.exports = Popular;
