'use strict';

const verticalMeter = require('.');
const test = require('ava');

const VERY_SMALL_NUM = 0.000001;

test('0   <= x < 1/8 → space', t => {
  t.is(verticalMeter(0), '⠀');
  t.is(verticalMeter((1 / 8) - VERY_SMALL_NUM), '⠀');
});

test('1/8 <= x < 3/8 → ⣀', t => {
  t.is(verticalMeter(1 / 8), '⣀');
  t.is(verticalMeter((3 / 8) - VERY_SMALL_NUM), '⣀');
});

test('3/8 <= x < 5/8 → ⣤', t => {
  t.is(verticalMeter(3 / 8), '⣤');
  t.is(verticalMeter((5 / 8) - VERY_SMALL_NUM), '⣤');
});

test('5/8 <= x < 7/8 → ⣶', t => {
  t.is(verticalMeter(5 / 8), '⣶');
  t.is(verticalMeter((7 / 8) - VERY_SMALL_NUM), '⣶');
});

test('7/8 <= x <= 1  → ⣿', t => {
  t.is(verticalMeter(7 / 8), '⣿');
  t.is(verticalMeter(1), '⣿');
});

test('invalidate non-number argument', t => {
  t.throws(
    () => verticalMeter('foo'),
    'Expected the first argument to be a number (0 ~ 1), but got foo (string).'
  );
});

test('invalidate negative number', t => {
  t.throws(
    () => verticalMeter(-1),
    'Expected the first argument to be a number (0 ~ 1), but got a negative number -1.'
  );
});

test('invalidate too large number', t => {
  t.throws(
    () => verticalMeter(1.1),
    'Expected the first argument to be a number (0 ~ 1), but got a too large number 1.1.'
  );
});
