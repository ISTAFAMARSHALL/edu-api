class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: [:google_oauth2]


  acts_as_token_authenticatable

  has_many :teachers
  has_many :schools, through: :teachers
  has_many :students
  has_many :student_classes, through: :teachers
  has_many :course_enrollments, through: :students


  def self.from_omniauth(auth)

    user = User.where(email: auth.info.email). first
    unless user
    user = User.create(
    email: auth.info.email,
    password: Devise.friendly_token[0,20]
    )
    end

    user.name = auth.info.name
    user.image = auth.info.image
    user.uid = auth.info.uid
    user.provider = auth.info.provider 
    user.save
  end

end