require 'rails_helper'

describe "Funny Quotes Page" do
  before do
    @quote = FactoryGirl.build(:funny)
    @quote.save
  end

  it "shows funny quote", js: true do
    visit '/quotes'
    click_link "Funny"
    sleep 2
    expect(page).to have_content(@quote.body)
  end
end
