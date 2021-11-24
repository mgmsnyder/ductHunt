import React from 'react';
// import FormSection from "./FormSection";

const patternName = /^\S+$/
// const patternAddress = /^[[:alnum:]\-.]+(\s[[:alnum:]\-.]+)+$/
const patternAddress = /^[a-zA-Z0-9\-.]+(\s[a-zA-Z0-9\-.]+)+$/
const patternPostal = /^[a-zA-Z]\d[a-zA-Z]\h?\d[a-zA-Z]\d$/
const patternPhone = /(1-?)?\(?\d{3}(\)|-)?\d{3}-?\d{4}/
const patternEmail = /^[a-zA-Z0-9]+([a-zA-Z0-9.]+)*@[a-zA-Z0-9]+\.[a-zA-Z0-9]{1,10}(\.[a-zA-Z0-9]{1,5})?$/

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userTitle: '',
      userFirstName: '',
      userLastName: '',
      userAddressLine1: '',
      userAddressLine2: '',
      userAddressCountry: '',
      userAddressCityMunicipality: '',
      userAddressProvinceTerritory: '',
      userAddressCode: '',
      userContactNumber: '',
      userContactEmail: '',
      userContactConfirmEmail: '',
      userContactLanguage: '',
      userSpammedNumber: '',
      userSpammedPersonal: false,
      userSpammedBusiness: false,
      userSpammedProvider: '',
      callUserAction: '',
      callOnPickup: '',
      callNameOrNumber: '',
      callDeclaration: '',
      callerNumber: '',
      callerID: '',
      callerAddress: '',
      callerWebsite: '',
      callDate: '',
      callTime: '',
      reasonSell: false,
      reasonWon: false,
      reasonSurvey: false,
      reasonPolitical: false,
      reasonDonation: false,
      reasonDebt: false,
      reasonPsa: false,
      reasonUnknown: false,
      purchaseStatus: '',
      purchaseNow: false,
      purchaseRecent: false,
      purchaseDistant: false,
      businessInquiry: false,
      businessContract: false,
      businessDivulge: false,
      businessVisit: false,
      ceaseNow: false,
      ceasePrior: false,
      ceaseRefuse: false,
      consent: false,
    };
  }

  validName =(event)=>{
    if (patternName.test(event.target.value)){
      event.target.className = 'valid'
    }else{
      event.target.className = 'invalid'
    }
    console.log(event.target)
  }
  validAddress =(event)=>{
    if (patternAddress.test(event.target.value)){
      event.target.className = 'valid'
    }else{
      event.target.className = 'invalid'
    }
    console.log(event.target)
  }
  validPostal =(event)=>{
    if (patternPostal.test(event.target.value)){
      event.target.className = 'valid'
    }else{
      event.target.className = 'invalid'
    }
  }
  validPhone =(event)=>{
    if (patternPhone.test(event.target.value)){
      event.target.className = 'valid'
    }else{
      event.target.className = 'invalid'
    }
  }
  validEmail =(event)=>{
    if (patternEmail.test(event.target.value)){
      event.target.className = 'valid'
    }else{
      event.target.className = 'invalid'
    }
  }
  
  componentDidMount() {
    if (localStorage.dataUser !== undefined) {
      const storageUser = JSON.parse(localStorage.dataUser);
      for (let key in storageUser) {
        this.setState({ [key]: storageUser[key] });
      }
    }
    if (localStorage.dataCall !== undefined) {
      const storageCall = JSON.parse(localStorage.dataCall);
      for (let key in storageCall) {
        this.setState({ [key]: storageCall[key] });
      }
    }
  }

  formSubmit = () => {
    const dataState = Object.entries(this.state);
    const dataUser = {};
    for (let i = 0; i < 17; i++) {
      dataUser[dataState[i][0]] = dataState[i][1];
    }
    const dataCall = {};
    for (let i = 17; i < 47; i++) {
      dataCall[dataState[i][0]] = dataState[i][1];
    }
    localStorage.dataUser = JSON.stringify(dataUser);
    localStorage.dataCall = JSON.stringify(dataCall);
    console.log(localStorage.dataUser);
    console.log(localStorage.dataCall);
  };
  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <div className="sectionLabel">User Information</div>
        <label>
          Title:
          <select
            value={this.state.userTitle}
            name="userTitle"
            onChange={this.handleChange}>
            <option value="">Select</option>
            <option label="Mr" value="Mr">
              Mr
            </option>
            <option label="Ms" value="Ms">
              Ms
            </option>
            <option label="Miss" value="Miss">
              Miss
            </option>
            <option label="Mrs" value="Mrs">
              Mrs
            </option>
            <option label="Dr" value="Dr">
              Dr
            </option>
          </select>
        </label>

        <label>
          First Name:
          <input
            name="userFirstName"
            placeholder="First Name"
            value={this.state.userFirstName}
            onChange={this.handleChange}
            required
            onBlur={this.validName}
            />
        </label>
        <label>
          Last Name:
          <input
            name="userLastName"
            placeholder="Last Name"
            value={this.state.userLastName}
            onChange={this.handleChange}
            required
            onBlur={this.validName}
          />
        </label>

        <label>
          Address line 1:
          <input
            name="userAddressLine1"
            placeholder="123 Queen St"
            value={this.state.userAddressLine1}
            onChange={this.handleChange}
            required
            onBlur={this.validAddress}
          />
        </label>

        <label>
          Address line 2:
          <input
            name="userAddressLine2"
            placeholder="Last Name"
            value={this.state.userAddressLine2}
            onChange={this.handleChange}
            onBlur={this.validAddress}
          />
        </label>

        <label>
          Country:
          <input
            name="userAddressCountry"
            placeholder="Last Name"
            value={this.state.userAddressCountry}
            onChange={this.handleChange}
          />
        </label>

        <label>
          City / Municipality:
          <input
            name="userAddressCityMunicipality"
            placeholder="Last Name"
            value={this.state.userAddressCityMunicipality}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Province / Territory:
          <input
            name="userAddressProvinceTerritory"
            placeholder="Last Name"
            value={this.state.userAddressProvinceTerritory}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Postal / Zip code:
          <input
            name="userAddressCode"
            placeholder="Last Name"
            value={this.state.userAddressCode}
            onChange={this.handleChange}
            onBlur={this.validPostal}
          />
        </label>
        <div className="headerSmall">How to contact you</div>
        <label>
          Phone number:
          <input
            name="userContactNumber"
            placeholder="Last Name"
            value={this.state.userContactNumber}
            onChange={this.handleChange}
            onBlur={this.validPhone}
          />
        </label>

        <label>
          Email:
          <input
            name="userContactEmail"
            placeholder="janeorjoe@example.com"
            value={this.state.userContactEmail}
            onChange={this.handleChange}
            onBlur={this.validEmail}
            />
        </label>

        <label>
          Confirm Email:
          <input
            name="userContactConfirmEmail"
            placeholder="Should be the same as the above"
            value={this.state.userContactConfirmEmail}
            onChange={this.handleChange}
            onBlur={this.validEmail}
          />
        </label>

        <label>
          Preferred language of correspondence:
          <select
            value={this.state.userContactLanguage}
            name="userContactLanguage"
            onChange={this.handleChange}>
            <option value="">Select</option>
            <option label="English" value="english">
              English
            </option>
            <option label="French" value="french">
              French
            </option>
          </select>
        </label>

        <div className="sectionLabel">Call Event</div>
        <label>
          Phone number you were called at:
          <input
            name="userSpammedNumber"
            placeholder="819-555-1234"
            value={this.state.userSpammedNumber}
            onChange={this.handleChange}
            required
            onBlur={this.validPhone}
          />
        </label>

        <div className="question">
          You use this number as your (please check all that apply)
        </div>
        <label>
          <input
            type="checkbox"
            name="userSpammedPersonal"
            checked={this.state.userSpammedPersonal}
            onChange={this.handleChange}
          />
          Personal phone
        </label>
        <label>
          <input
            type="checkbox"
            name="userSpammedBusiness"
            checked={this.state.userSpammedBusiness}
            onChange={this.handleChange}
          />
          Business phone
        </label>

        <label>
          Provider for this phone number:
          <input
            name="userSpammedProvider"
            placeholder="Bell"
            value={this.state.userSpammedProvider}
            onChange={this.handleChange}
          />
        </label>

        <div>When I received this call I:</div>
        <label>
          <input
            type="radio"
            value="Answered"
            name="callUserAction"
            checked={this.state.callUserAction === 'Answered'}
            onChange={this.handleChange}
          />
          Answered the phone
        </label>
        <label>
          <input
            type="radio"
            value="Unanswered"
            name="callUserAction"
            checked={this.state.callUserAction === 'Unanswered'}
            onChange={this.handleChange}
          />
          Did not answer the phone
        </label>
        <label>
          <input
            type="radio"
            value="Message"
            name="callUserAction"
            checked={this.state.callUserAction === 'Message'}
            onChange={this.handleChange}
          />
          Received a voice mail message
        </label>

        <div>What happened after you answered the phone?</div>
        <label>
          <input
            type="radio"
            value="live"
            name="callOnPickup"
            checked={this.state.callOnPickup === 'live'}
            onChange={this.handleChange}
          />
          It was a live person
        </label>
        <label>
          <input
            type="radio"
            value="recording"
            name="callOnPickup"
            checked={this.state.callOnPickup === 'recording'}
            onChange={this.handleChange}
          />
          It was a pre-recorded message
        </label>
        <label>
          <input
            type="radio"
            value="hold"
            name="callOnPickup"
            checked={this.state.callOnPickup === 'hold'}
            onChange={this.handleChange}
          />
          A pre-recorded message asked me to hold for a live person
        </label>
        <label>
          <input
            type="radio"
            value="vacant"
            name="callOnPickup"
            checked={this.state.callOnPickup === 'vacant'}
            onChange={this.handleChange}
          />
          There was no one on the line
        </label>

        <div>
          To file a complaint, you must know the name or phone number of the
          organization. Please indicate which of the following you have
        </div>
        <label>
          <input
            type="radio"
            value="name"
            name="callNameOrNumber"
            checked={this.state.callNameOrNumber === 'name'}
            onChange={this.handleChange}
          />
          The name of the organization
        </label>
        <label>
          <input
            type="radio"
            value="number"
            name="callNameOrNumber"
            checked={this.state.callNameOrNumber === 'number'}
            onChange={this.handleChange}
          />
          The phone number of the organization
        </label>
        <label>
          <input
            type="radio"
            value="both"
            name="callNameOrNumber"
            checked={this.state.callNameOrNumber === 'both'}
            onChange={this.handleChange}
          />
          Both the name and phone number of the organization
        </label>

        <div>I declare that I am providing accurate information:</div>
        <label>
          <input
            type="radio"
            value="yes"
            name="callDeclaration"
            checked={this.state.callDeclaration === 'yes'}
            onChange={this.handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            name="callDeclaration"
            checked={this.state.callDeclaration === 'no'}
            onChange={this.handleChange}
          />
          No
        </label>

        <div className="sectionLabel">Caller Information</div>
        <label>
          Caller Phone Number:
          <input
            name="callerNumber"
            placeholder="819-555-1234"
            value={this.state.callerNumber}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Caller ID / VoIP (819-555-1234, 1234@example.ca):
          <input
            name="callerID"
            placeholder="Displayed name or number"
            value={this.callerID}
            onChange={this.handleChange}
          />
        </label>

        <div className="headerSmall">
          If they gave you any of the following, please enter it here:
        </div>
        <label>
          Mailing address:
          <input
            name="callerAddress"
            placeholder="123 Main St., Anytown Province"
            value={this.callerAddress}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Website:
          <input
            name="callerWebsite"
            placeholder="https://companyname.ca"
            value={this.state.callerWebsite}
            onChange={this.handleChange}
          />
        </label>

        <label>
          E-mail address:
          <input
            name="callerEmail"
            placeholder="person@companyname.ca"
            value={this.state.callerEmail}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Date (yyyy-mm-dd):
          <input
            name="callDate"
            placeholder="1972-11-29"
            value={this.state.callDate}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Time (24 hour format):
          <input
            name="callTime"
            placeholder="14:38"
            value={this.state.callTime}
            onChange={this.handleChange}
          />
        </label>

        <div className="headerSmall">
          What was the expressed reason for the call? (check all that apply)
        </div>
        <label>
          <input
            type="checkbox"
            name="reasonSell"
            checked={this.state.reasonSell}
            onChange={this.handleChange}
          />
          Wanted to sell you something
        </label>

        <label>
          <input
            type="checkbox"
            name="reasonWon"
            checked={this.state.reasonWon}
            onChange={this.handleChange}
          />
          Said you won something
        </label>

        <label>
          <input
            type="checkbox"
            name="reasonSurvey"
            checked={this.state.reasonSurvey}
            onChange={this.handleChange}
          />
          Wanted you to do a survey
        </label>

        <label>
          <input
            type="checkbox"
            name="reasonPolitical"
            checked={this.state.reasonPolitical}
            onChange={this.handleChange}
          />
          Tell you a political, or politically related, message
        </label>

        <label>
          <input
            type="checkbox"
            name="reasonDonation"
            checked={this.state.reasonDonation}
            onChange={this.handleChange}
          />
          Looking for a donation from you
        </label>

        <label>
          <input
            type="checkbox"
            name="reasonDebt"
            checked={this.state.reasonDebt}
            onChange={this.handleChange}
          />
          It was a debt or bill collector
        </label>

        <label>
          <input
            type="checkbox"
            name="reasonPsa"
            checked={this.state.reasonPsa}
            onChange={this.handleChange}
          />
          It was information or public service message
        </label>

        <label>
          <input
            type="checkbox"
            name="reasonUnknown"
            checked={this.state.reasonUnknown}
            onChange={this.handleChange}
          />
          You don’t know, or ended the call before finding out
        </label>

        <div className="headerSmall">
          Have you ever purchased anything from this organization?
        </div>
        <label>
          <input
            type="radio"
            value="yes"
            name="purchaseStatus"
            checked={this.state.purchaseStatus === 'yes'}
            onChange={this.handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            name="purchaseStatus"
            checked={this.state.purchaseStatus === 'no'}
            onChange={this.handleChange}
          />
          No
        </label>

        <div className="headerSmall">When did you make this purchase?</div>

        <label>
          <input
            type="checkbox"
            name="purchaseNow"
            checked={this.state.purchaseNow}
            onChange={this.handleChange}
          />
          During this call
        </label>

        <label>
          <input
            type="checkbox"
            name="purchaseRecent"
            checked={this.state.purchaseRecent}
            onChange={this.handleChange}
          />
          Within the last 18 months
        </label>

        <label>
          <input
            type="checkbox"
            name="purchaseDistant"
            checked={this.state.purchaseDistant}
            onChange={this.handleChange}
          />
          More than 18 months ago
        </label>

        <div className="headerSmall">
          What other business, if any, have you done with this organization?
          (please check all that apply)
        </div>

        <label>
          <input
            type="checkbox"
            name="businessInquiry"
            checked={this.state.businessInquiry}
            onChange={this.handleChange}
          />
          Asked about a product, or service, within the last 6 months
        </label>

        <label>
          <input
            type="checkbox"
            name="businessContract"
            checked={this.state.businessContract}
            onChange={this.handleChange}
          />
          Had a contract that expired
        </label>

        <label>
          <input
            type="checkbox"
            name="businessDivulge"
            checked={this.state.businessDivulge}
            onChange={this.handleChange}
          />
          Provided your personal information through a contest, reward program,
          or other form
        </label>

        <label>
          <input
            type="checkbox"
            name="businessVisit"
            checked={this.state.businessVisit}
            onChange={this.handleChange}
          />
          A representative from their organization went to your home to provide
          an estimate or service
        </label>

        <div className="headerSmall">
          Have you asked not to be called again? (please check all that apply)
        </div>

        <label>
          <input
            type="checkbox"
            name="businessInquiry"
            checked={this.state.businessInquiry}
            onChange={this.handleChange}
          />
          During this call
        </label>

        <label>
          <input
            type="checkbox"
            name="businessContract"
            checked={this.state.businessContract}
            onChange={this.handleChange}
          />
          Made a previous request more than 14 days ago
        </label>

        <label>
          <input
            type="checkbox"
            name="businessDivulge"
            checked={this.state.businessDivulge}
            onChange={this.handleChange}
          />
          They refused to place you on an internal Do Not Call list
        </label>

        <div>
          Before your request can be completed, a security check must be
          performed. This is to prevent unauthorized access to the National
          DNCL. To submit your complaint, please click the box below.
        </div>

        <div id="declaration">
          “I consent to the CRTC collecting the personal information I have
          provided in this complaint” The types of information collected can be
          found in the National DNCL Personal Information Bank on Infosource at{' '}
          <a href="https://crtc.gc.ca/eng/about/sources.htm">
            https://crtc.gc.ca/eng/about/sources.htm
          </a>
          , Bank Number: CRT PPU 075.
        </div>

        <label>
          <input
            type="checkbox"
            name="consent"
            checked={this.state.consent}
            onChange={this.handleChange}
          />
          I am not a robot
        </label>
        <div></div>
        <button onClick={this.formSubmit}>Submit</button>

        {/* <FormSection
          fields={{
            name: "userFirstName",
            value: this.state.userFirstName,
          }}
        /> */}
      </div>
    );
  }
}
export default Form;
