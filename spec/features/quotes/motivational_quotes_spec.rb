require 'rails_helper'

describe "Motivational Quotes Page" do
  before do
    @quote = FactoryGirl.build(:motivational)
    @quote.save
  end

  it "shows motivational quote", js: true do
    visit '/quotes'
    click_link "Motivational"
    sleep 2
    expect(page).to have_content(@quote.body)
  end
end

