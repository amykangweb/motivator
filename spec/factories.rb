FactoryGirl.define do

  factory :motivational, class: Quote do
    id "1"
    body "Motivational Quote."
    author "Author One"
    category "Motivational"
  end

  factory :m2, class: Quote do
    body "Motivational Quote Two."
    author "Author One"
    category "Motivational"
  end

  factory :funny, class: Quote do
    body "Funny Quote."
    author "Author Two"
    category "Funny"
  end

  factory :f2, class: Quote do
    body "Funny Quote Two."
    author "Author Two"
    category "Funny"
  end

  factory :sad, class: Quote do
    body "Sad Quote."
    author "Author Three"
    category "Sad"
  end

  factory :s2, class: Quote do
    body "Sad Quote Two."
    author "Author Three"
    category "Sad"
  end
end
