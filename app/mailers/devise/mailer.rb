require 'devise'

class Mailer < Devise::Mailers   
    default template_path: 'devise/mailer' # to make sure that your mailer uses the devise views
  
    # Add your custom methods, overrides, etc.
  end