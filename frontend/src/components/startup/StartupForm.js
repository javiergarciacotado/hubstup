import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const StartupForm = ({startup, errors, allIndustries, onSave, onChange, saving}) => {
  return (
    <form>
      <h1>Manage Startup</h1>
      <TextInput
        name="name"
        label="Name"
        value={startup.name}
        onChange={onChange}
        error={errors.name} />

      <SelectInput
        name="industryId"
        label="Industry"
        value={startup.industryId}
        defaultOption="Select Industry"
        options={allIndustries}
        onChange={onChange}
        error={errors.industry} />

      <TextInput
        name="keywords"
        label="Keywords"
        value={startup.keywords ? startup.keywords.toString() : ""}
        onChange={onChange}
        error={errors.keywords} />

      <TextInput
        name="url"
        label="URL"
        value={startup.url}
        onChange={onChange}
        error={errors.url} />

      <TextInput
        name="watchHref"
        label="Presentation"
        value={startup.watchHref}
        onChange={onChange}
        error={errors.watchHref} />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

StartupForm.propTypes = {
  startup: React.PropTypes.object.isRequired,
  errors: React.PropTypes.object,
  allIndustries: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default StartupForm;
