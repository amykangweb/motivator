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

  it "creates and updates vote", js: true do
    visit '/motivational'
    click_link "Vote"
    sleep 2
    expect(page).to have_content(1)
  end
end

