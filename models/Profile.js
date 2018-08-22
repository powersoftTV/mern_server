const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        String,
        reguiered: true
      },
      company: {
        title: String,
        required: true
      },
      location: {
        title: String
      },
      from: {
        title: Date,
        required: true
      },
      to: {
        title: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        title: Date
      }
    }
  ],
  education: [
    {
      school: {
        String,
        reguiered: true
      },
      degree: {
        title: String,
        required: true
      },
      field: {
        title: String,
        required: true
      },
      from: {
        title: Date,
        required: true
      },
      to: {
        title: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        title: Date
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkdin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
