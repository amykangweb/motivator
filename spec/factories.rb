FactoryGirl.define do

  factory :motivational, class: Quote do
    body "Motivational Quote."
    author "Author One"
    category "Motivational"
  end

  factory :funny, class: Quote do
    body "Funny Quote."
    author "Author Two"
    category "Funny"
  end

  factory :sad, class: Quote do
    body "Sad Quote."
    author "Author Three"
    category "Sad"
  end
end
